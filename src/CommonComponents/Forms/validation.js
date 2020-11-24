export const validate = values => {
    const errors = {}
    if (!values.name) {
      errors.name = 'Required'
    } else if (values.name.length < 15) {
      errors.name = 'Must be 15 characters or less'
    }
    if (!values.email) {
      errors.email = 'Required'
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
      errors.email = 'Invalid email address'
    }
    if (!values.year) {
      errors.year = 'Required'
    } else if (isNaN(Number(values.year))) {
      errors.year = 'Must be a number'
    } else if (Number(values.year) < 18) {
      errors.year = 'Sorry, you must be at least 18 years old'
    }
    return errors
    
    
}