workflow "Linting and Testing" {
  on = "push"
  resolves = "lint"
}

action "lint" {
  uses = "actions/npm@3c8332795d5443adc712d30fa147db61fd520b5a"
  args = "run lint"
}
