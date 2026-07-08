import { LegalPage } from '../components/LegalPage'
import { TERMS_OF_SERVICE } from '../content/terms-of-service'

export function TermsPage() {
  return <LegalPage document={TERMS_OF_SERVICE} />
}
