# Powershell.exe -ExecutionPolicy Unrestricted -File .\test.ps1
mkdir withBackground
cd ./dynamic
$originals = Get-ChildItem *.gif
foreach ($original in $originals) {
  $character = $original.BaseName

  New-Item -ItemType Directory -Force "./$($character)/"

  magick convert "$($character).gif" "./$($character)/$($character)_%03d.png"

  cd "./$($character)/"

  $lastImage = Get-ChildItem "$($character)_*.png" | Sort-Object Name -Descending | Select-Object -First 1
  magick convert $lastImage.Name -evaluate multiply 4 background.png

  $images = Get-ChildItem "$($character)_*.png"
  foreach($image in $images) {
    magick composite .\background.png -compose Multiply $image.Name "composed_$($image.Name)"
  }
  magick convert "composed_$($character)_%03d.png[0-$($images.Length-1)]" "../../withBackground/$($character).gif"

  cd ..

  Remove-Item "./$($character)/" -Recurse -Force
}
cd ..
