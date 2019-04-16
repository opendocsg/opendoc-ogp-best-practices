# Using GitHub

Source control is vital to collaboration between developers. This sets out a few guidelines
worth observing when coordinating changes in GitHub

## Branching strategy
* Maintain a mainline and release branch, both protected
* Changes in mainline branch can be moved to the release branch through one of the following:
  * Raising a PR merging mainline changes into release  
    Recommended - the release branch clearly indicates what changes the releases
    have, making rollbacks easier and less error-prone to execute.
  * `git fetch && git checkout <mainline-name> && git pull && git push origin <mainline-name>:<release-name>`  
    Discouraged - while it leads to a cleaner commit tree (since both branches end up on the 
    same sequence of commits), switching between releases is more prone to human error 
    (though this can be mitigated using release tags), and requires a fair understanding of git 
    and using git via the command line. That said, this facilitates more precise control over
    what is released, at the commit level.
    
* Feature branches should hang off and merge into the mainline branch
  * Favour rebasing over merging to update feature branches
  * Keep feature branches **small**. This makes the PR easier to understand,
    and also makes it easier to rebase the feature branch on mainline should
    the need arise
  * If implementing a feature will take too many commits or too much change, 
    you might be undertaking too much work in one go. If so, split the work
    into more manageable chunks

* Hotfixes and trivial changes can be squashed as a single commit onto mainline

See Atlassian's article on [Gitflow Workflow](https://www.atlassian.com/git/tutorials/comparing-workflows/gitflow-workflow), on which our strategy is loosely based on

## Branch naming

* Mainline and release branches can have the following respective names:
  * `master` and `release`
  * `master` and `production`
  * `develop` and `master`
  * Any pair of names that conveys the sense that one branch is more stable
    than the other

* Branch names should be kebab-case (ie, small caps only, hyphen as word separator)
* Optionally, branch names can be prefixed by a category name followed by /, 
  * eg. feature/more-cowbell or hotfix/intermittent-hackfix

## Writing commits
See [How to Write a Git Commit](https://chris.beams.io/posts/git-commit/)

## Writing PRs and Comments
Make use of the following features:

* [Closing issues via Pull Requests](https://help.github.com/en/articles/closing-issues-using-keywords)
* [Referencing commits, issues and other repos](https://help.github.com/en/articles/autolinked-references-and-urls)
* [Referencing repository code](https://help.github.com/en/articles/creating-a-permanent-link-to-a-code-snippet)
* [GitHub Flavored Markdown](https://guides.github.com/features/mastering-markdown/#GitHub-flavored-markdown)
* [Marking duplicates](https://help.github.com/en/articles/about-duplicate-issues-and-pull-requests)

