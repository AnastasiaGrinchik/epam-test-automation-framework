const rptoken = process.env.RP_TOKEN;

const manualReport = {
  token: rptoken,
  endpoint: 'https://reportportal.epam.com/api/v1',
  project: 'aliaksandr_yeutushkou_personal',
  launch: 'aliaksandr_yeutushkou_TEST_EXAMPLE',
  mode: 'DEFAULT',
  debug: false,
  description: 'Static launch description',
  attributes: [{ key: 'key', value: 'value' }, { value: 'value' }],
  attachPicturesToLogs: false,
  rerun: false,
  rerunOf: 'launchUuid of already existed launch',
};

module.exports = { manualReport };
