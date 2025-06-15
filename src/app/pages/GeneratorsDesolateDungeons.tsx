import { Footer, GeneratorList } from '../components/index.js'
import { useLocale, useTitle } from '../contexts/index.js'

interface Props {
	path?: string
}
export function GeneratorsDesolateDungeons({}: Props) {
	const { locale } = useLocale()
	useTitle(locale('title.generators_desolate_dungeons'))

	return <main>
		<div class="legacy-container">
			<GeneratorList predicate={gen => gen.tags?.includes('generators-desolate-dungeons')} />
		</div>
		<Footer donate={false} />
	</main>
}
