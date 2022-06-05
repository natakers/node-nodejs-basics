export const parseEnv = () => {
  const envVariable = process.env;
  console.log(typeof envVariable);
  for (const key in envVariable) {
    envVariable[`RSS_${key}`] = envVariable[key];
    delete envVariable[key]; 
  }
  console.log(envVariable);
};
// parseEnv()