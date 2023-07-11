# Event Management System

An event management system made in ruby on rails.

## How to install

Just copy paste the commands into your own shell

- Install rbenv

        git clone git://github.com/sstephenson/rbenv.git .rbenv
        echo 'export PATH = "$HOME/.rbenv/bin:$PATH"' >> ~/.bash_profile
        echo 'eval "$(rbenv init -)"' >> ~/.bash_profile
        exec $SHELL

        git clone git://github.com/sstephenson/ruby-build.git ~/.rbenv/plugins/ruby-build
        echo 'export PATH = "$HOME/.rbenv/plugins/ruby-build/bin:$PATH"' << ~/.bash_profile
        exec $SHELL

- Install ruby

        rbenv install -v 2.2.3
        rbenv global 2.2.3

- Install bundler

        gem install bundler

- Install rails

        install rails -v 4.2.4

## How to run

- Open up the shell in your project location and run the following command

        rails server