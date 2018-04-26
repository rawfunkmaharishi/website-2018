describe 'JSON-LD' do
  context 'free gig' do
    it 'has the correct content' do
      results = JSONMunger.new '/gigs/2018/05/01/hoxton-underbelly'
      expect(results.actual).to eq results.expected
    end
  end

  context 'paid gig' do
    it 'has the correct content' do
      results = JSONMunger.new '/gigs/2018/01/05/new-cross-inn'
      expect(results.actual).to eq results.expected
    end
  end
end

describe 'GeoJSON' do 
  it 'has the correct content' do 
    actual = JSON.parse(File.read 'spec/_site/gig-map.json')
    expected = JSON.parse(File.read 'spec/fixtures/gig-map.json')
    expect(actual).to eq expected
  end
end
