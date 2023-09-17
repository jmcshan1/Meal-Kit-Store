const Handlebars = require('handlebars');
// Purpose: to format the date
Handlebars.registerHelper('format_date', (date) => {
    return `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`;
});