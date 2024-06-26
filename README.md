# Create A File
action to create a file in the actions workflow
## path
```yaml
with:
    path: value
```
Path where you want to create the file relative to the cwd (default: root of your repository)
## isAbsolutePath ( optional )
```yaml
with:
    isAbsolutePath: boolean
```
If the path provided is an absolute path (default: false)
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
Content of the file (default: empty)

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
      - uses: 1arp/create-a-file-action@0.4.5
        with:
          path: 'src'
          isAbsolutePath: false
          file: 'foo.bar'
          content: |
            Hello
            World
````
