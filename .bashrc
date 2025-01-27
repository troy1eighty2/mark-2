export PATH=$PATH:/home/troy1eighty2/.local/bin

# /home/troy1eighty2/.local/bin//wal -R &>/dev/null &

# eval "$(oh-my-posh init bash --config ~/.config/oh-my-posh/blue-owl.omp.json)"

alias ll='ls -alF'
alias la='ls -A'
alias l='ls -CF'
alias dualmonitor='xrandr --output eDP-1 --mode 1920x1080 --output HDMI-1-0 --mode 1920x1080 --right-of eDP-1'
alias singlemonitor='xrandr --auto'

alias sleep='systemctl suspend'
alias byebye='shutdown -h now'

alias ms='cd ~/MyStuff/'

alias ultrabright='xrandr --output eDP --brightness 2'
alias maxbright='xrandr --output eDP --brightness 1'
alias medbright='xrandr --output eDP --brightness .5'
alias lowbright='xrandr --output eDP --brightness .3'
alias minbright='xrandr --output eDP --brightness .1'
alias neofetch='neofetch --source ~/MyStuff/Wallpapers/neofetch.txt'
alias sd="cd ~ && cd \$(find * -type d | fzf)"
alias ta="tmux attach -t"

# export PATH="${PATH}:${HOME}/.local/bin/"
seh(){
  local selected=$(history | fzf | awk '{$1=""; print substr($0,2)}')
  if [ -n "$selected" ]; then
    eval "$selected"
  fi
}
alias seh='seh'

bind 'set bell-style none'

neofetch
