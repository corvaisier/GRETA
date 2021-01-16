import * as yup from 'yup'

let schema = yup.object().shape({
    numberController: yup.number().required().positive().integer().max(99).min(0)
})

export default schema