import { ApiService } from './../services/api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nft',
  templateUrl: './nft.component.html',
  styleUrls: ['./nft.component.scss'],
})
export class NftComponent implements OnInit {
  nft1: any = [];
  metadata: any;
  nftDetails: any;
  nftMaindDetails: any;
  searchtext: any = '';
  root: any;
  

  displayedColumns: string[] = ['traittype', 'value'];
  public attributes: [] = [];
  public metadata1!: {
    key: number;
  };

  constructor(private api: ApiService) {

    this.api.serviceCall().subscribe((result) => {
      console.log('result', result);
      if (result) {
        this.loadDependency(result);
      }
    });
  }
  ngOnInit(): void {}
loadDependency(data: any) {
    console.log(data);
    this.nftMaindDetails = {
      image:data?.['metadata']['data']['image'],
      nftName: data['metadata']['data']['name'],
      creators: data['onchainMetadata']['data']['creators'],
      tokenId: data['account'],
      mintId: data['tokenInfo']['tokenAuthority'],
      totalSupply: data['tokenInfo']['supply'],
    };
    console.log(this.nftMaindDetails);
    this.metadata = data['metadata'];
    this.attributes = this.metadata['data']['attributes'];
    const metadata = {
      key: data?.['key'],
      mint: data?.['mint'],
      updateAuthority: data?.['updateAuthority'],
      name: data?.['name'],
      symbol: data?.['symbol'],
      uri: data?.['uri'],
      seller_fee_basis_points: data?.['metadata']['data']['seller_fee_basis_points'],
    };
    this.metadata1 = metadata;
  }

  onserachtextentered(searchValue: any) {
    this.api.getapi(searchValue).subscribe((res)=>{
      console.log("result 1",res)
      if(res){
        this.loadDependency(res);
      }
    })
    this.searchtext = searchValue;
    console.log(this.searchtext);

  }
  

}
