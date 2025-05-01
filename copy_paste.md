# Below are snippets of code: 

GIT_WORK_TREE environment variable and the core.worktree configuration variable (see core.worktree
           in git-config(1) for a more detailed discussion).

           the GIT_WORK_TREE environment variable and the core.worktree configuration variable




Running Git commands in the "/path/to" directory will still use "/different/path" as the root of the work
    tree and can cause confusion unless you know what you are doing 
    
        (e.g. you are creating a read-only snapshot of the same index to
            a location different from the repository’s usual working tree).


# run: 
$ git rev-parse --is-bare-repository to check if your repository is bare.
core.worktree variable in Git is used to define the location of the working tree 

# if git does not know the working tree do: 
$ git config --global core.worktree /path/to/your/project
 


