import PropTypes from 'prop-types'
import { approvedAddresses } from '../common'
import SPCert from './certificate'
import SPTranscript from '../common/transcript'
import { MultiCertificateRenderer } from '../../../../MultiCertificateRenderer'

const templates = [
  {
    id: 'certificate',
    label: 'Certificate',
    template: SPCert
  },
  {
    id: 'transcript',
    label: 'Transcript',
    template: SPTranscript
  }
]

const SP2019MAIN = ({ certificate }) => (
  <MultiCertificateRenderer
    certificate={certificate}
    templates={templates}
    whitelist={approvedAddresses}
  />
)

SP2019MAIN.displayName = 'SP-2019-MAIN Template'
SP2019MAIN.propTypes = {
  certificate: PropTypes.object.isRequired
}

export default SP2019MAIN
