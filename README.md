# Create A File
action to create a file in the actions workflow
## path
```yaml
with:
    path: value
```
Path where you want to create the file relative to the cwd (default: root of your repository)
## file
```yaml
with:
    file: value
```
Name of the file with extention
## content
```yaml
with:
    content: value
```
Conteng of the file (default: empty)

## Example Usage

An example of a workflow for some documentation.

````yml
name: Create A File
# This workflow is triggered on pushes to the repository.
on:
  push:
    branches:
      - master

jobs:
  createFile:
    name: Create A File
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - uses: 1arp/create-a-file-action@0.2
        with:
          path: 'src'
          file: 'foo.bar'
          content: |
            Hello
            World
````
