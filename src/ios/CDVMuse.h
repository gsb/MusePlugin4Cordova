#import <Foundation/Foundation.h>
#import <UIKit/UIKit.h>
#import <Cordova/CDVPlugin.h>

#import "Muse.h"

@class CDVMuse;

@interface CDVMuse : CDVPlugin <IXNMuseDataListener, IXNMuseConnectionListener> {
	NSString* _initCallbackId;
	NSString* _dataCallbackId;
}

@property (strong, nonatomic) id<IXNMuse> muse;

- (void)reconnectToMuse;

- (void)init:(CDVInvokedUrlCommand *)command;
- (void)registerDataListener:(CDVInvokedUrlCommand *)command;
- (void)unregisterDataListener:(CDVInvokedUrlCommand *)command;
- (void)getEEG:(CDVInvokedUrlCommand *)command;

- (void)receiveMuseDataPacket:(IXNMuseDataPacket *)packet;
- (void)receiveMuseArtifactPacket:(IXNMuseArtifactPacket *)packet;
- (void)receiveMuseConnectionPacket:(IXNMuseConnectionPacket *)packet;

@end