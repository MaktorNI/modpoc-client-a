import { mountForm } from '@maktorni/module-form'

// Client-specific settings. Exported so the CI test can check them against the installed module.
export const settings = {
  title: 'Пекарна Слънце',
}

// Guard keeps the file importable from Node tests, where there is no browser document.
if (typeof document !== 'undefined') {
  mountForm(document.querySelector('#form'), settings)
}
