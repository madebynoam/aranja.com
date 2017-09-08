
```
 █████╗ ██████╗  █████╗ ███╗   ██╗     ██╗ █████╗     ██████╗ ██████╗ ███╗   ███╗
██╔══██╗██╔══██╗██╔══██╗████╗  ██║     ██║██╔══██╗   ██╔════╝██╔═══██╗████╗ ████║
███████║██████╔╝███████║██╔██╗ ██║     ██║███████║   ██║     ██║   ██║██╔████╔██║
██╔══██║██╔══██╗██╔══██║██║╚██╗██║██   ██║██╔══██║   ██║     ██║   ██║██║╚██╔╝██║
██║  ██║██║  ██║██║  ██║██║ ╚████║╚█████╔╝██║  ██║██╗╚██████╗╚██████╔╝██║ ╚═╝ ██║
╚═╝  ╚═╝╚═╝  ╚═╝╚═╝  ╚═╝╚═╝  ╚═══╝ ╚════╝ ╚═╝  ╚═╝╚═╝ ╚═════╝ ╚═════╝ ╚═╝     ╚═╝                                                                                              
                                                                                                         
```

Installation
------------

``` sh
$ yarn
$ yarn start
```

Converting videos
------------

We serve videos as webm with mp4 as fallback.

Installing ffmpeg via homebrew:

``` sh
$ brew install ffmpeg --with-fdk-aac --with-ffplay --with-freetype --with-libass --with-libquvi --with-libvorbis --with-libvpx --with-opus --with-x265
```

and to convert a video
``` sh
$ ffmpeg -i puppies.mov -acodec libvorbis -aq 5 -ac 2 -qmax 25 -threads 2 puppies.webm
```
