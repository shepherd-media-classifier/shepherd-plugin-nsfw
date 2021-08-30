import col from 'ansi-colors'
import { EOL } from 'os'
import fs from 'fs'

export const logger = (...args: any[]) => {
	let prefix = '[logger]'
	if(args.length > 1){
		prefix = '[' + args[0] + ']'
		args.shift()
	}

	console.log(col.magenta(prefix), ...args)

	//outputs a csv file
	fs.appendFile(
		'nsfwjs-plugin.log', 
		"\"" + new Date().toUTCString() + '\",' + prefix + ',' + args.join(',') + EOL,
		()=>{}
	)
}