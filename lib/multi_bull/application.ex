defmodule MultiBull.Application do
  # See https://hexdocs.pm/elixir/Application.html
  # for more information on OTP Applications
  @moduledoc false

  use Application

  def start(_type, _args) do
    children = [
      # Start the Telemetry supervisor
      MultiBullWeb.Telemetry,
      # Start the PubSub system
      {Phoenix.PubSub, name: MultiBull.PubSub},
      # Start the Endpoint (http/https)
      MultiBullWeb.Endpoint,
      # Start a worker by calling: MultiBull.Worker.start_link(arg)
      # {MultiBull.Worker, arg}
      MultiBull.BackupAgent,
      MultiBull.GameSup,
    ]

    # See https://hexdocs.pm/elixir/Supervisor.html
    # for other strategies and supported options
    opts = [strategy: :one_for_one, name: MultiBull.Supervisor]
    Supervisor.start_link(children, opts)
  end

  # Tell Phoenix to update the endpoint configuration
  # whenever the application is updated.
  def config_change(changed, _new, removed) do
    MultiBullWeb.Endpoint.config_change(changed, removed)
    :ok
  end
end
