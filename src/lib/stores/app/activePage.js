import { writable, get, derived } from 'svelte/store'
import { Page } from '../../factories'

export const id = writable('')
export const name = writable('')
export const url = writable('index')
export const code = writable(Page().code)
export const content = writable({ en: {} })
export const fields = writable(Page().fields)
export const parent = writable(Page().parent)
export const metadata = writable(Page().metadata)
export const page_type = writable(Page().page_type)

export function set(val) {
	if (val.id) {
		id.set(val.id)
	}
	if (val.name) {
		name.set(val.name)
	}
	if (val.url) {
		url.set(val.url)
	}
	if (val.code) {
		code.set(val.code)
	}
	if (val.content) {
		content.set(val.content)
	}
	if (val.fields) {
		fields.set(val.fields)
	}
	if (val.metadata) {
		metadata.set(val.metadata)
	}
	if (val.page_type) {
		page_type.set(val.page_type)
	}
}

// conveniently get the entire site
export default derived(
	[id, name, url, code, content, fields, metadata, page_type],
	([id, name, url, code, content, fields, metadata, page_type]) => {
		return {
			id,
			name,
			url,
			code,
			content,
			fields,
			metadata,
			page_type
		}
	}
)
