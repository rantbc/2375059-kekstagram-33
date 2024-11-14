const meeting = (workStart, workEnd, meetingStart, meetingDuration) => {

  const workStartTime = workStart;
  const workEndTime = workEnd;
  const meetingStartTime = meetingStart;

  const toMins = (time) => {
    let parts = time.split(':'); // создаем из строки массивы, разделитель :
    parts = Number(parts[0]) * 60 + Number(parts[1]); // переводим в минуты
    return parts;
  };

  const workStartTimeMins = toMins(workStartTime);
  const meetingStartTimeMins = toMins(meetingStartTime);
  const workTimeDuration = toMins(workEndTime) - toMins(workStartTime);
  const meetingTimeDuraion = toMins(meetingStartTime) + meetingDuration - toMins(workStartTime);

  if (workStartTimeMins <= meetingStartTimeMins && workTimeDuration >= meetingTimeDuraion) {
    return true;
  }
  return false;

};

// console.log(meeting('8:00', '17:30', '08:00', 900));
