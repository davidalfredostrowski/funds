module.exports = {
  migrations_directory: "./migrations",
  networks: {
    development: {
      host: "ec2-44-242-152-132.us-west-2.compute.amazonaws.com",
      port: 8545,
      network_id: "*" // Match any network id
    }
  }
}
