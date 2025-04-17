module.exports = {
    apps: [
      {
        name: 'chatbot',
        script: 'menu.js', 
        watch: true,
        max_memory_restart: '200M', 
        env: {
          NODE_ENV: 'production', 
        },
        /*env_development: {
          ///[
          // NODE_ENV: 'development', // so pra desenvolvimento        
          } */
      }
    ]
  };