workflow "lint on push" {
  on = "push"
  resolves = [
    "lint"
  ]
}

action "install" {
  uses = "actions/npm@v2.0.0"
  args = "install"
}

action "lint" {
  uses = "actions/npm@v2.0.0"
  needs = ["install"]
  args = "run lint"
}
