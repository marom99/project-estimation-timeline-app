const WEEKEND = [0,6];

function nextWorkingDay(date){
  const d = new Date(date);
  while (WEEKEND.includes(d.getDay())) {
    d.setDate(d.getDate()+1);
  }
  return d;
}

function addWorkingDays(startDate, days){
  let d = new Date(startDate);
  while (days > 0){
    d.setDate(d.getDate()+1);
    if (!WEEKEND.includes(d.getDay())){
      days--;
    }
  }
  return d;
}

function scheduleTasks(tasks, startDate, hoursPerDay=8){
  const unscheduled = new Map();
  tasks.forEach(t => unscheduled.set(t.id, t));
  const scheduled = {};
  const start = nextWorkingDay(new Date(startDate));

  while (unscheduled.size){
    let progress = false;
    for (const [id, task] of Array.from(unscheduled.entries())){
      const deps = task.dependencies || [];
      const ready = deps.every(dep => scheduled[dep]);
      if (!ready) continue;
      let taskStart = new Date(start);
      for (const dep of deps){
        const depEnd = scheduled[dep].end;
        const next = addWorkingDays(depEnd,1);
        if (next > taskStart) taskStart = next;
      }
      taskStart = nextWorkingDay(taskStart);
      const days = Math.ceil(task.hours / hoursPerDay);
      const taskEnd = addWorkingDays(taskStart, days-1);
      scheduled[id] = { ...task, start: taskStart, end: taskEnd };
      unscheduled.delete(id);
      progress = true;
    }
    if (!progress) throw new Error('Circular or unsatisfied dependencies');
  }

  return scheduled;
}

module.exports = { scheduleTasks, addWorkingDays, nextWorkingDay };
