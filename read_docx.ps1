Add-Type -AssemblyName System.IO.Compression.FileSystem
$src = 'C:\Users\sujit\sarvam-enviro-ui\public\Website content.docx'
$dst = 'C:\Users\sujit\sarvam-enviro-ui\website_content_copy.docx'
Copy-Item $src $dst -Force
$zip = [System.IO.Compression.ZipFile]::OpenRead($dst)
$entry = $zip.Entries | Where-Object { $_.FullName -eq 'word/document.xml' }
$stream = $entry.Open()
$reader = New-Object System.IO.StreamReader($stream)
$content = $reader.ReadToEnd()
$reader.Close()
$zip.Dispose()
Remove-Item $dst -Force
$text = $content -replace '<[^>]+>', ''
$text = $text -replace '&amp;', '&'
$text = $text -replace '&lt;', '<'
$text = $text -replace '&gt;', '>'
$text = $text -replace '\s+', ' '
Write-Output $text
