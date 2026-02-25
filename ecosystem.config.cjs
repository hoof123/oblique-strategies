module.exports = {
  apps: [
    {
      name: "oblique-strategies",
      script: "npm",
      args: "start",
      interpreter: "node",
      cwd: "./",
      instances: 1,
      exec_mode: "cluster",
      env: {
        NODE_ENV: "production",
        PORT: 3000,
      },
    },
  ],
};
