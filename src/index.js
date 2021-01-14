import '@lwc/synthetic-shadow';

import App from 'my/app';

const availableFeature = detectFeatures();
const isNotCompatibleBrowser = Object.keys(availableFeature).some(
    (feature) => !availableFeature[feature]
);

if (isNotCompatibleBrowser) {
    unsupportedErrorMessage(availableFeature);
} else {
    customElements.define('my-app', App.CustomElementConstructor);
}

function detectFeatures() {
    return {
        'Service Worker': 'serviceWorker' in navigator,
        'Push Manager': 'PushManager' in window
    };
}

function unsupportedErrorMessage() {
    const { outdated } = window;
    outdated.style.display = 'unset';

    let message = `This browser doesn't support all the required features`;

    message += `<ul>`;
    for (const [name, available] of Object.entries(availableFeature)) {
        message += `<li><b>${name}:<b> ${available ? '✅' : '❌'}</li>`;
    }
    message += `</ul>`;

    // eslint-disable-next-line @lwc/lwc/no-inner-html
    outdated.querySelector('.unsupported_message').innerHTML = message;
}
