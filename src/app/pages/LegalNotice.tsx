import { Footer } from '../components/index.js'
import { useLocale, useTitle } from '../contexts/index.js'

interface Props {
	path?: string,
}
export function LegalNotice({}: Props) {
	const { locale } = useLocale()
	useTitle(locale('title.legal_notice'))

	return <main>
		<div class="legacy-container legal-notice">
			<h2><b>{locale('legal_notice.content')}</b></h2>
			<p>Dassen-Yashar Yilmaz</p>
			<br/>
			<p>c/o IP-Management #5833</p>
			<p>Ludwig-Erhard-Str. 18</p>
			<p>20459 Hamburg</p>
			<br/>
			<h2><b>{locale('legal_notice.contact')}</b></h2>
			<p>{locale('legal_notice.email')} contact@dassen.dev</p>
			<p>{locale('legal_notice.phone')} (+49) 151 22072206</p>
		</div>
		<Footer />
	</main>
}
