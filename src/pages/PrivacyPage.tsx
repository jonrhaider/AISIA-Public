import { LegalPage } from '../components/LegalPage'
import { PRIVACY_POLICY } from '../content/privacy-policy'

export function PrivacyPage() {
  return <LegalPage document={PRIVACY_POLICY} />
}
