# shepherd-plugin-nsfw

This is a nsfw plugin for the [shepherd](https://github.com/shepherd-media-classifier/shepherd) content moderation framework. 
It implements the [shepherd-plugin-interfaces](https://www.npmjs.com/package/shepherd-plugin-interfaces).

You can use this as-is with shepherd, and it will create a positive filter for a strict adult content blacklist. 

- Expect false positives. The aim of this plugin is to have zero adult content get through.
- This is a work in progress. Bug reports appreciated :-) just open a github issue.

## installation
> N.B. Do **not** install this package from npm yourself

First set up shepherd as per instructions (not covered here), then simply add `"shepherd-plugin-nsfw"` to the `shepherd.config.json` file. 
It should look something like this:
```json
{
	"plugins": [ 
		"shepherd-plugin-nsfw"
	],
	"lowmem": false
}
```
Check the [shepherd README](https://github.com/shepherd-media-classifier/shepherd#readme) for further details and updates regarding this installation configuration procedure.

