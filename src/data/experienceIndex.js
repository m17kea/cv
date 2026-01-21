import { experience as experiencePm } from './experience'
import { experience as experienceInfra } from './experience_infra'

const mode = 'pm'

export const experience = mode === 'infra' ? experienceInfra : experiencePm
