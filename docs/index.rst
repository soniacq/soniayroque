.. sonia-roque documentation master file, created by
   sphinx-quickstart on Wed May 16 17:59:27 2018.
   You can adapt this file completely to your liking, but it should at least
   contain the root `toctree` directive.

Welcome to sonia-roque's documentation!
=======================================

# Vizier DB - Web User Interface

This repository contains the code for the Vizier DB Web User Interface. This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).
For more information on how to perform common tasks [refer to this guide](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md).

## Install and Run

Start by cloning the repository and switching to the app directory.

```
git clone https://github.com/VizierDB/web-ui.git
cd web-ui
```

Inside the app directory, you can run several commands:

#### Install build dependencies

```
yarn install
```

#### Start the development server
```
yarn start
```

#### Bundles the app into static files for production
```
yarn build
```

#### Additional Commands

Starts the test runner.
```
yarn test
```

Remove this tool and copies build dependencies, configuration files and scripts into the app directory. If you do this, you can’t go back!
```
yarn eject
```

## Configuration

The UI app connects to the Web API server. The Url for the server is currently hard-coded in the file ```public/env.js```. Before running ```yarn start``` adjust the Url to point to a running Web API server. By default a local server running on port 5000 is used.

.. toctree::
   :maxdepth: 2
   :caption: Contents:



Indices and tables
==================

* :ref:`genindex`
* :ref:`modindex`
* :ref:`search`
