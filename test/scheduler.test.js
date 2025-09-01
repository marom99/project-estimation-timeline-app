const assert = require('assert');
const { scheduleTasks } = require('../src/scheduler');

(function testSimpleChain(){
  const tasks = [
    { id: 'prod', hours: 16 },
    { id: 'design', hours: 8, dependencies: ['prod'] },
    { id: 'eng', hours: 24, dependencies: ['design'] }
  ];
  const start = new Date('2023-11-20');
  const result = scheduleTasks(tasks, start, 8);
  const prod = result['prod'];
  const design = result['design'];
  const eng = result['eng'];
  assert.strictEqual(prod.start.toDateString(), new Date('2023-11-20').toDateString());
  assert.strictEqual(prod.end.toDateString(), new Date('2023-11-21').toDateString());
  assert.strictEqual(design.start.toDateString(), new Date('2023-11-22').toDateString());
  assert.strictEqual(design.end.toDateString(), new Date('2023-11-22').toDateString());
  assert.strictEqual(eng.start.toDateString(), new Date('2023-11-23').toDateString());
  assert.strictEqual(eng.end.toDateString(), new Date('2023-11-27').toDateString());
})();

console.log('All tests passed.');
