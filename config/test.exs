use Mix.Config

# We don't run a server during test. If one is required,
# you can enable the server option below.
config :multi_bull, MultiBullWeb.Endpoint,
  http: [port: 4002], # okay
  server: false

# Print only warnings and errors during test
config :logger, level: :warn
