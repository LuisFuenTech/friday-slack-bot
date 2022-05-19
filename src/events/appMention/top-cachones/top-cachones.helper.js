const redis = require("../../../databases/redis/repository");

const {
  COURSE_OPERATION,
  COURSE_NUMBER,
  PLEASURE_NUMBER,
} = require("../../../utils/constants");

const closeRedis = () => {
  return redis.disconnect();
};

const connectRedis = () => {
  return redis.connect();
};

const zRevRange = ({ key, start, stop, withscores }) => {
  return redis.zrevrange({ key, start, stop, withscores });
};

const getSpecialMessage = (especialNumber) => {
  const especialNumbers = {
    [COURSE_OPERATION]: ":tre: :ce:",
    [COURSE_NUMBER]: ":tre: :ce:",
    [PLEASURE_NUMBER]: ":tibiri-happy: :gustavo69: Rikooo!!",
  };

  if (!Object.keys(especialNumbers).includes(especialNumber)) {
    return "";
  }

  return especialNumbers[especialNumber];
};

module.exports = {
  closeRedis,
  connectRedis,
  zRevRange,
  getSpecialMessage,
};
