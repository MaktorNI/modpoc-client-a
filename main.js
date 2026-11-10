import { mountForm } from '@maktorni/module-form'
import { mountBanner } from '@maktorni/module-banner'


// Client-specific settings. Exported so the CI test can check them against the installed module.
export const settings = {
  title: 'Пекарна Слънце',
}

// Guard keeps the file importable from Node tests, where there is no browser document.
if (typeof document !== 'undefined') {
  mountForm(document.querySelector('#form'), settings)
mountBanner(document.querySelector('#banner'), { message: 'Работим до 18:00', variant: 'info' })
}
