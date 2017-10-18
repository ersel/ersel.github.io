'use strict'

var marked = require('marked');
var fs = require('fs');
var Handlebars = require('handlebars');
var readingTime = require('reading-time');
var moment = require('moment');
var yaml = require('js-yaml');
var cheerio = require('cheerio');

function getFile(fileSrc, cb){
	fs.readFile(fileSrc, 'utf8', (err, file) => {
		if (err) throw err;
		cb(file);
	});
}

function getExcerpt(html){
	var $ = cheerio.load(html);
	// get the first paragraph
	var p = $('p').first();
	while (p.children('img').length > 0) {
		p = p.next();
	}
	let excerpt = $.text(p).trim();
	let firstLetter = excerpt[0];
	return `<span class="dropcap">${firstLetter}</span>${excerpt.slice(1)}`;
}

// Get document, or throw exception on error
try {
	var siteConfig = yaml.safeLoad(fs.readFileSync('config.yml', 'utf8'));
	// build an object to store all posts
	var contentExcerpts = [];
	var contentExcerptsLength = siteConfig.posts.length;
	// go over posts and compile them
	siteConfig.posts.forEach((post) => {
		var templateFileSrc = `./templates/${post.template}`;
		// get template file
		getFile(templateFileSrc, (templateFile) => {
			// now we can get post
			var postContentSrc = `./posts/${post.content}`;
			getFile(postContentSrc, (content) => {
				// convert content from markdown to html
				var htmlContent = marked(content);
				// add dropcaps to each paragraph following a h1
				var $ = cheerio.load(htmlContent);
				$('h1').next('p').replaceWith((i, el) => {
					let rawHtml = $(el).html()
					let firstLetter = rawHtml[0];
					let style = `<span class="dropcap">${firstLetter}</span>${rawHtml.slice(1)}`;
					return `<p>${style}</p>`
				})
				htmlContent = $.html()

				var compiledTemplate = Handlebars.compile(templateFile);

				// compute data to be baked into html
				var readingDuration = readingTime(content).text;
				var publishedDate = moment(post.date).format('Do of MMMM YYYY');

				var render = compiledTemplate({
					title: post.title,
					subtitle: `${publishedDate}, ${readingDuration}`,
					content: htmlContent
				});
				var fileName = `./blog/${post.filename}`;
				fs.writeFile(fileName, render, function(err){
					if(err) throw err;
					console.log(`${post.filename} saved.`);
				});
				contentExcerpts.push({
					title: post.title,
					url: post.filename,
					date: post.date,
					duration: readingDuration,
					prettyDate: publishedDate,
					categories: post.category,
					excerpt: getExcerpt(render)
				});
				if(contentExcerpts.length === contentExcerptsLength){
					fs.writeFile('./blog/excerpts.js', `var d=${JSON.stringify(contentExcerpts)};`, function(err){
						if (err) throw err;
						console.log('Excerpts JSON generated.')
					})
				}
			});
		});
	});
} catch (e) {
	console.log(e);
}
