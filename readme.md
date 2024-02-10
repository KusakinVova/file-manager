# File manager

## Cross-check review

1. Make sure that you have **v20 LTS Node** installed on your computer
2. git clone <git@github.com>:KusakinVova/file-manager.git
3. git checkout file-manager

## How to use?

1. The program is started by npm-script start in following way:

   ```bash
   npm run start -- --username=your_username
   ```

2. The program is started by terminal command in following way:

   ```bash
   node index.js --username=your_username
   ```

3. Exit from the file manager using the `ctrl+c` keys and the commands:

   ```bash
   .exit
   exit
   ```

### List of operations and their syntax

1. cd path_to_directory for example:

   1.1 for Windows

   ```bash
   cd \folder\folder\
   cd ..\folder
   cd .\folder\folder
   ```

   1.2. for Linux or MacOs

   ```bash
   cd /folder/projects/
   cd ../folder/projects/
   cd ./folder/folder/
   ```

2. cat path_to_file for example:

   ```bash
   cat index.js
   ```

3. add new_file_name for example:

   ```bash
   add file.txt
   ```

4. rename file new_filename for example:

   ```bash
   rn /folder/file.txt /folder/file2.txt
   rn \folder\file.txt \folder\file2.txt
   rn file.txt file2.txt
   ```

5. copy path_to_file path_to_new_directory for example:

   ```bash
   cp /file-manager/src/index.js /file-manager/
   cp file.txt /folder/
   cp /folder/file.txt /
   ```

6. move path_to_file path_to_new_directory for example:

   ```bash
   mv index.js /file-manager/
   mv file.txt ./folder
   mv /folder/file.txt /
   ```

7. remove path_to_file for example:

   ```bash
   rm /file-manager/src/index.js
   rm file.txt
   ```

### Operating system info

1. Get EOL (default system End-Of-Line).

   ```bash
   os --EOL
   ```

2. Get host machine CPUs info (overall amount of CPUS plus model and clock rate (in GHz) for each of them).

   ```bash
   os --cpus
   ```

3. Get home directory.

   ```bash
   os --homedir
   ```

4. Get current system user name (Do not confuse with the username that is set when the application starts)

   ```bash
   os --username
   ```

5. Get CPU architecture for which Node.js binary has compiled

   ```bash
   os --architecture
   ```

### Hash calculation

hash path_to_file for example:

```bash
hash /file-manager/index.js
hash file.txt
```

### Compress and decompress operations

1. compress path_to_file path_to_destination for example:

   ```bash
   compress index.js index.js.br
   compress /folder/file.js /file-manager/file.br
   ```

2. decompress path_to_file path_to_destination for example:

   ```bash
   decompress index.js.br index.js
   decompress folder/file.br file.txt
   ```
