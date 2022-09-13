const servers = {
    dev_local: {
      name: 'Back-dev_local',
      url: '',
    },
    dev_sever: {
      name: 'Back-dev_server',
      url: '',
    },
    stage: {
      name: 'Back-stage',
      url: '',
    },
    prod: {
      name: 'Production',
        url: '',
    },
};

const server = servers.dev_local;

export const SERVER_NAME = server.name;
export const API_URL = server.url;