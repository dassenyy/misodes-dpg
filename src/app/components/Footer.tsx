import { useLocale } from '../contexts/index.js'
import { SOURCE_REPO_URL } from '../Utils.js'
import { Octicon } from './index.js'

interface Props {
	donate?: boolean,
}
export function Footer({ donate }: Props) {
	const { locale } = useLocale()

	return <footer>
		<p>
			<span>{locale('developed_by')} <a href="https://github.com/misode" target="_blank" rel="noreferrer">Misode</a></span>
		</p>
		<p>
			<span>{locale('footer.fork_by')} <a href="https://github.com/dassenyy" target="_blank" rel="noreferrer">dassenyy</a></span>
		</p>
		{donate !== false && <p class="donate">
			{Octicon.heart}
			<span>{locale('footer.donate_misode')} <a href="https://ko-fi.com/misode" target="_blank" rel="noreferrer">{locale('donate')}</a></span>
		</p>}
		<p>
			{Octicon.mark_github}
			<span>{locale('source_code_on')} <a href={SOURCE_REPO_URL} target="_blank" rel="noreferrer">{locale('github')}</a></span>
		</p>
		<p>
			<a href="/legal-notice/">{locale('footer.legal_notice')}</a>
		</p>
	</footer>
}
