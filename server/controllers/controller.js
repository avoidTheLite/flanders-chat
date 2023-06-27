export function controllerFunction1(req, res) {
//we pretend this retrieves some data
    const controllerData1 ={

    ID: req.params['ID'],
    name: "Robert Pulson",
    type: 'example',
    url: "https://en.wikipedia.org/wiki/Special:Random"

    };
return controllerData1
};
