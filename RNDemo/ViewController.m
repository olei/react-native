//
//  ViewController.m
//  RNDemo
//
//  Created by zhuzhanping on 2017/6/28.
//  Copyright © 2017年 zhuzhanping. All rights reserved.
//

#import "ViewController.h"
#import "RCTRootView.h"

@interface ViewController ()

@end

@implementation ViewController

- (void)viewDidLoad {
    [super viewDidLoad];
    self.view.backgroundColor = [UIColor whiteColor];
    
    
    NSString * strUrl = @"http://127.0.0.1:8081/index.ios.bundle?platform=ios&dev=true";
    NSURL * jsCodeLocation = [NSURL URLWithString:strUrl];
    
    RCTRootView * rootView = [[RCTRootView alloc] initWithBundleURL:jsCodeLocation
                                                         moduleName:@"RNDemo"
                                                  initialProperties:nil
                                                      launchOptions:nil];
//    [self.view addSubview:rootView];
    self.view = rootView;
}


- (void)didReceiveMemoryWarning {
    [super didReceiveMemoryWarning];
    // Dispose of any resources that can be recreated.
}


@end
