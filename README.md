Muse Plugin for Cordova
-------------

Add following key into the iOS .plist

@ {{ project name }}/platforms/ios/{{ project name }}/{{ project name }}-Info.plist

"Supported external accessory protocols"
- Item 0: com.interaxon.muse

Add to bottom of .plist like below:

    ...
    </array>
    
    <key>UISupportedExternalAccessoryProtocols</key>
    <array>
      <string>com.interaxon.muse</string>
    </array>
    
  </dict>
</plist>

