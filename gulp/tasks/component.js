const fs = require('fs');
const path = require('path');

function createComponent(cb) {
    const componentName = process.argv[4]; 
    const basePath = path.join('src/template/components', componentName);

    if (!componentName) {
        console.log('Please provide a component name.');
        return cb();
    }

    if (fs.existsSync(basePath)) {
        console.log(`Component "${componentName}" already exists.`);
        return cb();
    }

    fs.mkdirSync(basePath);

    const htmlContent = `<div class="${componentName}">\n\t<h1>${componentName} component created!</h1>\n</div>\n`;
    fs.writeFileSync(path.join(basePath, `${componentName}.html`), htmlContent);

    const scssContent = `.${componentName} {\n\t/* Styles for ${componentName} */\n}\n`;
    fs.writeFileSync(path.join(basePath, `${componentName}.scss`), scssContent);

    console.log(`Component "${componentName}" created successfully.`);

    cb();
}

exports.createComponent = createComponent;
