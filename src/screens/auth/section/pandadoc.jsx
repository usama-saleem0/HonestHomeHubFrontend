import React, { useEffect, useState } from 'react';

const FormComponent = () => {
    const [show, setShow] = useState(false);

    useEffect(() => {
        const config = {
            nodeId: 'form-container-ef719d73-0aec-4e1a-88c6-509933b68a2a',
            width: '100%',
            height: '700px',
            url: 'https://eform.pandadoc.com/?eform=f5ad0b2b-26bb-4be3-abc5-5376ffe4451e',
            events: {
                loaded: function () {},
                started: function (data) {
                    if (data.started) {
                        console.log('Form is filled.');
                        setShow(false);
                    } else {
                        console.log('Form is not filled.');
                    }

                },
                completed: function (data) {
                    // Check if the form is filled
                    if (data.completed) {
                        console.log('Form is filled.');
                    } else {
                        console.log('COMPLETED.');
                        setShow(false)
                    }
                },
                exception: function (data) {}
            },
            data: {},
        };

        const dataQueryString = config.data ? Object.keys(config.data)
            .map(function (key) {
                return '&' + key + '=' + encodeURIComponent(JSON.stringify(config.data[key]));
            })
            .join('') : '';

        const iframe = document.createElement('iframe');
        iframe.frameBorder = 0;
        iframe.src = config.url + dataQueryString;
        if (config.nodeId) {
            const node = document.getElementById(config.nodeId);
            if (node) {
                node.style.height = config.height;
                node.style.width = config.width;
                iframe.height = '100%';
                iframe.width = '100%';
                node.appendChild(iframe);
            }
        } else {
            iframe.height = config.height;
            iframe.width = config.width;
            document.body.appendChild(iframe);
        }

        const eventMethod = window.addEventListener ? 'addEventListener' : 'attachEvent';
        const messageEvent = eventMethod === 'attachEvent' ? 'onmessage' : 'message';

        window[eventMethod](messageEvent, function (e) {
            if (e && e.data && config && iframe && e.source === iframe.contentWindow) {
                try {
                    const message = JSON.parse(e.data);
                    if (message && message.event) {
                        const event = message.event.replace('embed.form.', '');
                        const callback = config.events ? config.events[event] : null;
                        if (callback) {
                            callback(message.data);
                        }
                    }
                } catch (e) {}
            }
        }, false);

        // Clean up the iframe when component unmounts
        return () => {
            if (config.nodeId) {
                const node = document.getElementById(config.nodeId);
                if (node) {
                    node.innerHTML = '';
                }
            } else {
                document.body.removeChild(iframe);
            }
        };
    }, []); // Empty dependency array to run effect only once

    return (
        <div>
            {show && <div id='form-container-ef719d73-0aec-4e1a-88c6-509933b68a2a'></div>}
        </div>
    );
};

export default FormComponent;
