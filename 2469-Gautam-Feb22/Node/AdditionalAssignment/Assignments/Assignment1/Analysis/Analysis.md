System to manage Backup Files :

there is a backup folder in directory, task is to delete all files from that folder except latest two files.
for this, first we get all available files in directory and sorting all files based on modification time of file.
After sorting it remove/unlink all files with index>1 means index0 and index2 two files remain in backup folder, other files will be remove from directory.  