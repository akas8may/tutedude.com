This repository is a small student assignment workspace (simple Python scripts). The goal of these instructions is to give AI coding agents the minimal, concrete context needed to be productive here.

Repository overview
- Root README.md explains run order: `ASSIGNMENT_1_Task 1.py` is run first, then `ASSIGNMENT_1_Task 2.py`.
- Assignments live in the `Ass1/` directory. Key files:
  - `Ass1/ASSIGNMENT_1_Task 1.py` — interactive calculator; reads two integers with `input()` and prints simple arithmetic results.
  - `Ass1/ASSIGNMENT_1_Task 2.py` — interactive greeting; reads two strings with `input()` and prints a welcome message.

Big-picture architecture and intent
- This is not a service or library — it's a set of interactive scripts for learning/assignment purposes. There are no web servers, packaging configs, or dependency manifests.
- Design decisions you can assume:
  - Scripts are intentionally small and use `input()` for interactivity.
  - Filenames include spaces (e.g. `ASSIGNMENT_1_Task 1.py`) — treat them as literal filenames when running or editing.

How to run and debug (macOS / zsh)
- Run interactively (recommended for manual testing):
  - python3 "Ass1/ASSIGNMENT_1_Task 1.py"
  - python3 "Ass1/ASSIGNMENT_1_Task 2.py"
- Run non-interactively (useful for automated tests or CI):
  - printf "3\n2\n" | python3 "Ass1/ASSIGNMENT_1_Task 1.py"    # supplies two numbers to inputs
  - printf "Akash\nKulshrestha\n" | python3 "Ass1/ASSIGNMENT_1_Task 2.py"
- Debugging notes:
  - These scripts are simplest to debug by running in an IDE (PyCharm) or inserting `print()` statements.
  - Avoid changing the prompts unless requested by the course instructor; tests or graders may rely on exact prompts.

Project-specific conventions and patterns
- Preserve the exact prompt strings in `input()` calls unless an explicit task requests otherwise — these can be used by graders or tests.
- Do not rename assignment files or change their top-level behavior without a clear instruction from the repo owner.
- If you need to add tests or refactor, add new files under a new `tests/` folder or move reusable code into a new module (e.g., `Ass1/lib.py`) and keep the original script thin (call into the new module) so graders can still run the original filename.

Suggested small, safe refactors (when asked):
- Wrap logic in functions so it becomes testable (e.g., `def calculate(a, b): ...`), but keep the original interactive script as an entrypoint that calls these functions.
- Add a lightweight `requirements.txt` only if you introduce external packages (not required for current code).

Integration points and external dependencies
- Currently none. No CI, packaging, or external services are present. Keep changes localized and low-risk.

When making changes, an AI agent should:
1. Explain the motivation for any change (bugfix, testability, clarity) in the PR description.
2. Preserve user-visible behavior (prompts and output) unless the task explicitly says to change them.
3. If adding tests, include one small example of non-interactive invocation (using `printf` or input redirection) and a short README note describing how to run them.

Repository notes
- Current working branch was `assinment1` (may be a student branch). Be careful pushing changes to the default branch unless requested.

If anything here is unclear or you'd like the instructions to be stricter (for example: forbid any filename changes, or require a particular test framework), tell me which policy to enforce and I will update this file.
