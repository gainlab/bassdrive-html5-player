require 'net/http'

class PlayerController < ApplicationController
  def index
    @relays = relays
  end

  def nowplaying
    render json: { nowplaying: stream_data['nowplaying'][0]['name'] }
  end

private
  def relays
    @relays ||= stream_data['relays'].reject { |r| r['bitrate'] =~ /bad128/ }
  end

  def stream_data
    @stream_data ||= JSON.parse(Net::HTTP.get('bassdrive.com', '/relays.js'))
  end
end
